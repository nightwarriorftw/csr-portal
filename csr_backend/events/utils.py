import string
from django.utils.text import slugify

# random string generator
def random_string_generator(size=10, chars=string.ascii_lowercase+string.digits):
    return ''.join(random.choice(chars) for _ in range(size))

# unique slug generator
def unique_slug_generator(instance, new_slug=None):
    if slug is not None:
        slug = new_slug
    else:
        slug = slugify(instance.title)
    Kclass = instance.__class__
    qs_exists = Kclass.objects.filter(slug=slug).exists()

    if qs_exists:
        new_slug = "{slug}-{randomStr}".format(
            slug=slug,
            randomStr = random_string_generator(size=10)
        )
        return unique_slug_generator(instance, new_slug=new_slug)
    
    return slug
