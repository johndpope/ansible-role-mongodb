Role Name
=========

MongoDB server, initially targeted to RHEL. On AWS, we take care of the
disappearing `/var/run/mongodb` issue.  We also disable Transparent Huge Pages
as recommended by MongoDB.

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
* mongodb_agent_install: true
* mongodb_agent_api_key: 00000000000000000000000000000000
* mongodb_agent_mmsBaseURL: https://api-agents.mongodb.com
* mongodb_agent_version: 5.4.2.354-1


Dependencies
------------

* kurron.base

Example Playbook
----------------

```
- hosts: servers
  roles:
      - { role: kurron.mongodb,  mongodb_agent_api_key: 12345 }
```

License
-------

This project is licensed under the [Apache License Version 2.0, January 2004](http://www.apache.org/licenses/).

Author Information
------------------

[Author's website](http://jvmguy.com/).
