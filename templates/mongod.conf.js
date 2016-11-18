storage:
    dbPath: {{ mongodb_storage_directory }}
    journal:
        enabled: true
    directoryPerDB: true
    engine: wiredTiger
    wiredTiger:
        engineConfig:
            cacheSizeGB: {{ mongodb_cache_size_gb }}
            directoryForIndexes: true

operationProfiling:
    slowOpThresholdMs: 100
    mode: "{{ mongodb_profiling_mode }}"

setParameter:
    notablescan: {{ mongodb_no_table_scan_mode }}

systemLog:
    destination: file
    logAppend: true
    timeStampFormat: "iso8601-utc"
    path: {{ mongodb_log_directory }}/mongod.log

net:
  port: {{mongodb_port}}
  bindIp: 127.0.0.1  # Listen to local interface only, comment to listen on all interfaces.

processManagement:
  fork: true
  pidFilePath: /var/run/mongodb/mongod.pid
