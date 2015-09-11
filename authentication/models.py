from django.conf import settings
from django.db import models
from django.contrib.auth.models import User
from django.dispatch import receiver
from rest_framework.authtoken.models import Token


@receiver(models.signals.post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    """ Creates an auth token for a new session
    :param sender:
    :param instance:
    :param created:
    :param kwargs:
    :return:
    """
    if created:
        Token.objects.create(user=instance)


# Create your models here.
class Accounts(models.Model):
    user = models.OneToOneField(User)

    groups = models.CharField(max_length=40, blank=True)

    def __str__(self):
        return self.user.username