from django.db import models 

# Create your models here.
class Confirm(models.Model):

    first_name = models.CharField(max_length=255)
    email = models.EmailField()
    type = models.CharField(max_length=255)
    comment = models.CharField(max_length=255)

    def __str__(self):
        return f"Confirm for {self.first_name} and {self.email}"