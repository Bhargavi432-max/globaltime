# Generated by Django 4.2.3 on 2023-07-09 17:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='TimeEntry',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('hour', models.CharField(max_length=2)),
                ('minute', models.CharField(max_length=2)),
                ('am_pm', models.CharField(max_length=2)),
            ],
        ),
        migrations.DeleteModel(
            name='Time',
        ),
    ]