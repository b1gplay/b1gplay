from apps.sports.models.metric import Metric
from unittest import TestCase

from apps.messaging.models.comment import Comment


class CommentTestCase(TestCase):
    def tearDown(self):
        Comment.objects.all().delete()

    def test_string_representation_of_comment_is_comment_message(self):
        test_comment = 'Test comment'
        comment = Comment(message=test_comment)
        self.assertEqual(test_comment, str(comment))
