from rest_framework import serializers
from rest_framework.routers import DefaultRouter
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import DjangoModelPermissions

from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken

from apps.users.models.user import User
from django.conf import settings
from django.contrib.auth import authenticate



# User serializer
class UserSerialiser(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id',  'username' )
        
# Register serializer
class RegisterSerialiser(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id',  'username', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data['username'], validated_data['password'])

        return user

# Login Serializer
class LoginSerialiser(serializers.Serializer):
  username = serializers.CharField()
  password = serializers.CharField()

  def validate(self, data):
    user = authenticate(**data)
    if user and user.is_active:
      return user
    raise serializers.ValidationError("Incorrect Credentials")


# Register API
class RegisterAPI(generics.GenericAPIView):
  serializer_class = RegisterSerialiser

  def post(self, request, *args, **kwargs):
    serializer = self.get_serializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.save()
    #_, token = AuthToken.objects.create(user)
    return Response({
      "user": UserSerialiser(user, context=self.get_serializer_context()).data,
      "token": AuthToken.objects.create(user)[1]
    })

# Login API
class LoginAPI(generics.GenericAPIView):
  serializer_class = LoginSerialiser

  def post(self, request, *args, **kwargs):
    serializer = self.get_serializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.validated_data
    return Response({
      "user": UserSerialiser(user, context=self.get_serializer_context()).data,
      "token": AuthToken.objects.create(user)
    })
    
# Get User API
class UserAPI(generics.RetrieveAPIView):
    serializer_class = UserSerialiser
    permission_class = [permissions.IsAuthenticated]
    
    def get_object(self):
    		return self.request.user

	
