from rest_framework import serializers
from rest_framework.routers import DefaultRouter
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import DjangoModelPermissions

from apps.users.models.education import Education


class EducationSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = '__all__'


class EducationViewSet(ModelViewSet):
    queryset = Education.objects.all()
    serializer_class = EducationSerialiser
    permission_class = [DjangoModelPermissions]


educationRouter = DefaultRouter()
educationRouter.register(r'education-experiences', EducationViewSet)
