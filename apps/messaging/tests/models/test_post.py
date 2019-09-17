from unittest import TestCase

from apps.messaging.models.post import Post

from io import BytesIO


class PostTestCase(TestCase):

    def tearDown(self):
        Post.objects.all().delete()

    def setUp(self):

        img = BytesIO(b'mybinarydata')
        img.name = 'myimage.jpg'

        Post.objects.create(message="Follow me on b1gplay!", photo="img.name")

    def test_string_representation_of_post_is_post_message(self):
        test_post = 'Test post'
        post = Post(message=test_post)
        self.assertEqual(test_post, str(post))
