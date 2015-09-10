from authentication.models import Accounts
from rest_framework import serializers
 
 
class AccountsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Accounts
        fields = ('id', 'username', 'groups')