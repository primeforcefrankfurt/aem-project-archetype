/*
 *  Copyright 2015 Adobe Systems Incorporated
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
new hobs.TestSuite("${artifactName} Tests", {path:"/apps/${appsFolderName}/tests/SampleTests.js", register: true})

    .addTestCase(new hobs.TestCase("Stage component on German CoE demo page")
        .navigateTo("/content/coe-demo/germany/de/demo.html")
        .asserts.location("/content/coe-demo/germany/de/demo.html", true)
        .asserts.visible(".stage", true)
    )

    .addTestCase(new hobs.TestCase("Introcopy component on German CoE introcopy page")
        .navigateTo("/content/coe-demo/germany/de/components/introcopy.html")
        .asserts.location("/content/coe-demo/germany/de/components/introcopy.html", true)
        .asserts.visible(".introcopy", true)
    );
