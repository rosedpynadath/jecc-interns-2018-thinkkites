from django.db import migrations
from django.contrib.auth.models import User


def create_users(apps, schema_editor):
    User.objects.create_superuser(
        'adam.john',
        'adam.john@lntinfotech.com',
        'adam.john.007',
        first_name='Adam',
        last_name='John'
    )


class Migration(migrations.Migration):

    operations = [
        migrations.RunPython(create_users),
    ]
