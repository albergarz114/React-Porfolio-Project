from rest_framework import serializers 
from .models import Confirm


class ConfirmSerializer(serializers.ModelSerializer):

    class Meta:
        model = Confirm
        fields = ['id', 'first_name', 'email', 'type', 'comment']

