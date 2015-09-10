from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from authentication.models import Accounts
from authentication.serializers import UserSerializer


class UserView(viewsets.ModelViewSet):

    queryset = Accounts.objects.all()
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticated,)

    def get(self, request, format=None):
        content = {
            'status': 'request was permitted'
        }
        return Response(content)