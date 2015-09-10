from django.contrib.auth.models import User
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status

from authentication.models import Accounts
from authentication.permissions import IsOwnerOrReadOnly
from authentication.serializers import UserSerializer


class UserView(viewsets.ModelViewSet):

    queryset = Accounts.objects.all()
    serializer_class = UserSerializer