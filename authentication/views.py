from django.contrib.auth.models import User

from rest_framework.views import APIView
from rest_framework.response import Response

class AuthToken(APIView):
    def post(self, request, format=None):
        username = request.data.get("username")
        password = request.data.get("password")
        try:
            user = User.objects.get(username=username)
        except User.DoesNotExist:
            user = User.objects.create_user(username=username)
            user.set_password(password)
            user.save()
        content = {
            'user': str(user.username),
            'token': str(user.auth_token),
        }
        return Response(content)