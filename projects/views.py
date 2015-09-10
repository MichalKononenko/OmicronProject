from rest_framework import viewsets

from projects.models import Projects
from projects.serializers import ProjectsSerializer


# Create your views here.
class ProjectsViewSet(viewsets.ModelViewSet):

    queryset = Projects.objects.all()
    serializer_class = ProjectsSerializer