from rest_framework import serializers

from projects.models import Projects


class ProjectsSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Projects
        fields = ('name', 'supervisor', 'owner')

