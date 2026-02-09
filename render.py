import json
from jinja2 import Environment, FileSystemLoader

# Load JSON data
with open("data/data.json") as f:
    data = json.load(f)

# Load template
env = Environment(
    loader=FileSystemLoader("templates"),
    trim_blocks=True,
    lstrip_blocks=True
)
template = env.get_template("cisco_ios.j2")

# Render template
output = template.render(**data)

# Print result
print(output)
