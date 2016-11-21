# Derived from https://docs.mongodb.com/manual/reference/configuration-options/

# The Linux package init scripts included in the official MongoDB packages depend on specific values for systemLog.path, storage.dbpath, and processManagement.fork.
# If you modify these settings in the default configuration file, mongod may not start.

systemLog:
    path: "{{ mongodb_log_directory }}/mongod.log"
    logAppend: true
    destination: "file"
    timeStampFormat: "ctime"

processManagement:
    fork: true
    pidFilePath: "{{ mongodb_process_directory }}/mongod.pid"

net:
    port: {{mongodb_port}}

storage:
    dbPath: "{{ mongodb_storage_directory }}"
    journal:
        enabled: true
