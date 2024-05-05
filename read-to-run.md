# User login
user: admin
pass: melody1405
old: admin

# How to build
docker build -f Dockerfile -t secure-doc/teedy:2.0 .
docker build -f Dockerfile -t secure-doc/besu:2.0 .

Teedy is organized in several Maven modules:

- docs-core
- docs-web
- docs-web-common

First off, clone the repository: `git clone git://github.com/sismics/docs.git`
or download the sources from GitHub.

### Launch the build

From the root directory:

```console
mvn clean -DskipTests install
```

### Run a stand-alone version

From the `docs-web` directory:

```console
mvn jetty:run
```

### Build a .war to deploy to your servlet container for Docker

From the `docs-web` directory:

```console
mvn -Pprod -DskipTests clean install
```

You will get your deployable WAR in the `docs-web/target` directory.

### Run docs-besu

From the `docs-besu` directory:

```console
mvn clean spring-boot:run -DskipTest
```

# Call event
DocumentCreatedAsyncEvent documentCreatedAsyncEvent = new DocumentCreatedAsyncEvent();
documentCreatedAsyncEvent.setUserId("admin");
documentCreatedAsyncEvent.setDocumentId(document.getId());
ThreadLocalContext.get().addAsyncEvent(documentCreatedAsyncEvent);

# Update OpenJDK  17
wget https://download.java.net/java/GA/jdk17.0.2/dfd4a8d0985749f896bed50d7138ee7f/8/GPL/openjdk-17.0.2_linux-x64_bin.tar.gz

tar -xvf openjdk-17.*
cd <directory_name>
mkdir -p /usr/local/openjdk-17
mv * /usr/local/openjdk-17

vi .bashrc
export JAVA_HOME=/usr/local/openjdk-17
export PATH=$JAVA_HOME/bin:$PATH

### Set Alternative Java
update-alternatives --install "/usr/bin/java" "java" "/usr/local/openjdk-17/bin/java" 0
update-alternatives --install "/usr/bin/javac" "javac" "/usr/local/openjdk-17/bin/javac" 0
update-alternatives --set java /usr/local/openjdk-17/bin/java
update-alternatives --set javac /usr/local/openjdk-17/bin/javac

update-alternatives --config java
### AngularJs Guide
1. route at docs/app.js (line 286)

### How to use web3signer
1. Configuration need to seperate between eth1 and eth2
2. Under eth1 allowed to connect with devnet


### Old Compose for ethsigner
```
  ethsigner:
    container_name: ethsigner
    image: consensys/ethsigner:develop
    command: [
      "--chain-id=1337",
      "--http-listen-host=0.0.0.0",
      "--downstream-http-port=8545",
      "--downstream-http-host=besu",
      "file-based-signer",
      "-k",
      "/app/key",
      "-p",
      "/app/password"
    ]
    volumes:
      - ${PWD}/consensys/keys:/app
    ports:
      - 8545:8545
    networks:
      - app-tier
```
