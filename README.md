# aem-project-archetype
AEM 6.3 Maven Archetype Project 

This is a project template is derived from the generic AEM Multi-Module archetype (version 11), tailored for AEM 6.2.

### Requirements

* Adobe Experience Manager 6.3 or higher
* Apache Maven 3.3
* Java 8

### This package includes the AEM Core WCM Components   
* https://github.com/Adobe-Marketing-Cloud/aem-core-wcm-components


## Modules

There are just two parts of the project template:

* bundles: Java bundle containing core functionality OSGi services, Sling Models services and component-related Java code like servlets.
* apps: The components content package including: components, templates,  clientlibs

## How to build

To build all the modules run in the project root directory the following command with Maven 3:

    mvn clean install

If you have a running AEM instance you can build and package the whole project and deploy into AEM with

    mvn clean install -PautoInstallPackage

Or to deploy it to a publish instance, run

    mvn clean install -PautoInstallPackagePublish

Or to deploy only the bundle to the author, run

    mvn clean install -PautoInstallBundle


