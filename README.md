Using the technology of your choice, convert the following string:

"(id, name, email, type(id, name, customFields(c1, c2, c3)), externalId)"

To this output:

- id
- name
- email
- type
  - id
  - name
  - customFields
    - c1
    - c2
    - c3
- externalId

And also to this output:

- email
- externalId
- id
- name
- type
  - customFields
    - c1
    - c2
    - c3
  - id
  - name

<!-- scratch pad -->

',': id, email, type-id, type-name, cf-c1, cf-c2 - add to children (node with NO children, no need to put on stack - this is a leaf)
'(': type, customFields - add to children, then put on stack (this is a node with children)
')': cf-c3 - add to children, then remove parent from stack (this is a node with NO children)
', after )': externalId - add to children

depth: 0
char: (
field: empty string
do:

- set root to default
- increment depth

OR:
depth: 0
char: (
field: root
do:

- create node
- add to stack
- increment depth

depth: 1
char: ,
field: id, name, email
do:

- create node
- add to parent.children
- reset currentField

depth: 1
char: (
field: type
do:

- create node
- add to parent.children
- increment depth
- reset current field

depth: 2
char: ,
field: id, name
do:

- create node
- add to parent.children

depth: 2,
char: (
field: customFields
do:

- create node
- add to parent.children
- reset current field
- increment depth

depth: 3,
char: ,
field: c1, c2
do:

- create node
- add to parent.children
- reset current field

depth: 3,
char: )
field: c3
do:

- create node
- decrement depth
- pop parent from stack
- reset current field

depth: 2,
char: )
field: empty string
do:

- decrement depth
- pop parent from stack
