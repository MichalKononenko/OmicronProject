from rest_framework import serializers
from django.contrib.auth.models import User

from projects.models import Projects


class UserSerializer(serializers.ModelSerializer):
    projects = serializers.PrimaryKeyRelatedField(many=True, queryset=Projects.objects.all())

    class Meta:
        model = User
        fields = ('id', 'username', 'projects')
