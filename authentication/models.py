from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Accounts(models.Model):
    user = models.OneToOneField(User)

    groups = models.CharField(max_length=40, blank=True)

    def __str__(self):
        self.user.username