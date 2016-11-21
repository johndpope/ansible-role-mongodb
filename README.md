Role Name
=========

MongoDB server, initially targetted to RHEL.

Requirements
------------

TODO

Role Variables
--------------

* mongodb_install: true
* mongodb_version: 3.4
* mongodb_storage_directory: /var/lib/mongo
* mongodb_log_directory: /var/log/mongodb
* mongodb_process_directory: /var/run/mongodb
* mongodb_port: 27017

Dependencies
------------

* kurron.base

Example Playbook
----------------

```
- hosts: servers
  roles:
      - { role: kurron.mongodb }
```

License
-------

This project is licensed under the [Apache License Version 2.0, January 2004](http://www.apache.org/licenses/).

Author Information
------------------

[Author's website](http://jvmguy.com/).
