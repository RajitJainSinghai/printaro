from django.db import models
from cloudinary.models import CloudinaryField
from apps.products.models import Product


class Logo(models.Model):
    class Meta(object):
        db_table = 'logo'

    product = models.ForeignKey(
        Product, on_delete=models.CASCADE
    )
    image = CloudinaryField(
        'Image', blank=False, null=True
    )

    def __str__(self):
        return self.name
