# Create your tests here.
from django.test import TestCase
import projects.models as models


class TestProjects(TestCase):
    def setUp(self):
        self.title = 'TestProject'
        self.supervisor = 'TestSupervisor'
        models.Projects.objects.create(
            title=self.title, supervisor=self.supervisor
        )

    def test_str(self):
        project = models.Projects.objects.get(title=self.title)
        self.assertEqual(self.title, str(project))