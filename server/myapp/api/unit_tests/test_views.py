from django.test import TestCase, Client
from django.urls import reverse
from api.models import Confirm
from api.serializers import ConfirmSerializer
import json


class TestViews(TestCase):

    def setUp(self):
        self.client = Client()


        self.confirm = Confirm.objects.create(
            first_name ="Test Confirm",
            email="jgbf45@gmail.com",
            type="I need something to work",
            comment="I need to work asap. Please hire me!!",
        )

        