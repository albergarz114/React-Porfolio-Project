from django.test import TestCase
from api.models import Confirm


class ConfirmModelTest(TestCase):

    def setUp(self):
        self.confirm = Confirm.objects.create(first_name="Alb", email="albrte45@gmail.com", type="I need an API key", comment="I need a teammember asap! Help")

    def test_confirm_creation(self):
        self.assertEqual(self.confirm.first_name, "Alb")
        self.assertEqual(self.confirm.email, "albrte45@gmail.com")
        self.assertEqual(self.confirm.type, "I need an API key")
        self.assertEqual(self.confirm.comment, "I need a teammember asap! Help")

    # this is for def __str__ from models.py
    def test_confirm_str(self):
        expected_object_name = f"Confirm for {self.confirm.first_name} and {self.confirm.email}"
        self.assertEqual(str(self.confirm), expected_object_name)