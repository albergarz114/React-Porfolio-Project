from django.test import TestCase
from api.models import Confirm


class ConfirmModelTest(TestCase):

    def setUp(self):
        self.confirm = Confirm.objects.create('')