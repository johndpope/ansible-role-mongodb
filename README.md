Role Name
=========

RabbitMQ server, initially targetted to RHEL.

Requirements
------------

TODO

Role Variables
--------------

* rabbitmq_install: true
* rabbitmq_version: 3.6.5
* rabbitmq_build: 3.6.5-1

Dependencies
------------

* kurron.base

Example Playbook
----------------

```
- hosts: servers
  roles:
      - { role: kurron.rabbitmq }
```

License
-------

This project is licensed under the [Apache License Version 2.0, January 2004](http://www.apache.org/licenses/).

Author Information
------------------

[Author's website](http://jvmguy.com/).
