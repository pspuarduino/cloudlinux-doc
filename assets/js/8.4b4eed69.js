(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{201:function(e,t,s){"use strict";s.r(t);var i=s(0),a=Object(i.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("p",[s("router-link",{attrs:{to:"/general/"}},[e._v("General Information")])],1),e._v(" "),s("p",[s("router-link",{attrs:{to:"/usage_and_integration/"}},[e._v("Usage and Integration")])],1),e._v(" "),s("p",[s("router-link",{attrs:{to:"/installation_and_configuration/"}},[e._v("Installation and Configuration")])],1),e._v(" "),s("p",[s("router-link",{attrs:{to:"/configuration_details/"}},[e._v("Configuration Details")])],1),e._v(" "),s("p",[s("router-link",{attrs:{to:"/low-level_access/"}},[e._v("Low-level access")])],1),e._v(" "),e._m(1),e._v(" "),s("p",[e._v("One of the main problems on a shared hosting system for file backup operations is to figure out which files have changed. Using on a 1T drive with a large number of small files and directories guarantees slow startup times, and a lot of context switching between kernel and userspace - generating additional load. On the other hand scanning disk for newly modified files is very intensive, and can kill the performance of the fastest disks.")]),e._v(" "),s("p",[e._v("is a kernel level technology with the user space interface that buffers lists of modified files in the kernel and then off-loads that list to user space daemon.")]),e._v(" "),s("p",[e._v("After that - any software (with enough permissions) can get a list of files that has been modified for the last 24 hours.")]),e._v(" "),s("p",[e._v("The software is very simple to use and produces the  list of modified files. As such we expect file backup software, including integrated cPanel backup system to integrate with this soon.")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),s("p",[e._v("is a utility for getting the list of changed files.")]),e._v(" "),s("p",[e._v("It is supposed to be run by a super user only.")]),e._v(" "),s("p",[e._v("Command line parameters:")]),e._v(" "),e._m(4),s("p",[e._v("If no UID specified, are retrieved for all users. If no timestamp specified, all database events are shown.")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._m(7),e._v(" "),e._m(8),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),s("p",[e._v("This command is available within CageFS.")]),e._v(" "),e._m(12),e._v(" "),s("p",[e._v("6 (requires Hybrid kernel) or 7\nKernel Version: 3.10.0-427.36.1.lve1.4.47")]),e._v(" "),s("p",[e._v("To install system run:")]),e._v(" "),e._m(13),e._v(" "),e._m(14),e._m(15),e._v(" "),e._m(16),s("p",[e._v("Configuration file can be found in")]),e._v(" "),s("p",[e._v("Database containing list of modified files is located at by default.")]),e._v(" "),s("p",[e._v("After successful installation the event collecting daemon starts automatically, providing all data are in place.")]),e._v(" "),s("p",[e._v("To start daemon:")]),e._v(" "),e._m(17),e._v(" "),e._m(18),s("p",[e._v("_CloudLinux 6 Hybrid _  _ _")]),e._v(" "),e._m(19),s("p",[e._v("To stop daemon:")]),e._v(" "),s("p",[e._v("_CloudLinux 7 _  _ _")]),e._v(" "),e._m(20),e._m(21),e._v(" "),e._m(22),s("p",[e._v("To uninstall run:")]),e._v(" "),e._m(23),e._m(24),e._v(" "),s("p",[e._v("Configuration resides in . The following is the default configuration (see comments):")]),e._v(" "),e._m(25),e._v(" "),s("p",[e._v("The kernel exposes the functionality to folder.")]),e._v(" "),e._m(26)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"file-change-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#file-change-api","aria-hidden":"true"}},[this._v("#")]),this._v(" File Change API")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"general"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#general","aria-hidden":"true"}},[this._v("#")]),this._v(" General")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"usage-and-integration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-and-integration","aria-hidden":"true"}},[this._v("#")]),this._v(" Usage and Integration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Userland utilities")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("-t | --timestamp retrieve file names for files modified after specified timestamp\n-u | --uid       retrieve file names for particular UID only\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Output Format")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("protocol version (1 right now), timestamp (in seconds) - up to which time data was collected\nUID:absolute path to file changed\nUID:absolute path to file changed\n…\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[t("em",[this._v("Examples:")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("[root@localhost ~]# cloudlinux-backup-helper -t 1495533489 -u <UID>\n1,1495533925\n1001:/home/user2/public_html/output.txt\n1001:/home/user2/public_html/info.php\n[root@localhost ~]# cloudlinux-backup-helper -t 1495533489\n1,1495533925\n1000:/home/user1/.bashrc\n1001:/home/user2/public_html/output.txt\n1001:/home/user2/public_html/info.php\n1003:/home/user3/logs/data.log\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Getting changed files by end user")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[t("em",[this._v("Examples:")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("[user@localhost ~]$ cloudlinux-backup-helper-uid            \n \n  1,1495530576\n1000:/home/user/.bash_history\n \n[user@localhost ~]$ cloudlinux-backup-helper-uid -t 1495547922\n1,1495548343\n1000:/home/user/file1.txt\n1000:/home/user/file2.txt\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"installation-and-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation-and-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Installation and Configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("em",[this._v("CloudLinux 7")]),this._v("  _ _")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("yum install cloudlinux-fchange --enablerepo=cloudlinux-updates-testing\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("em",[this._v("CloudLinux 6 Hybrid")]),this._v("  _ _")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("yum install cloudlinux-fchange --enablerepo=cloudlinux-hybrid-testing\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("em",[this._v("CloudLinux 7")]),this._v("  _ _")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("systemctl start cloudlinux-file-change-collector\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("service cloudlinux-file-change-collector start\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("systemctl stop cloudlinux-file-change-collector\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("em",[this._v("CloudLinux 6 Hybrid")]),this._v("  _ _")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("service cloudlinux-file-change-collector stop\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("yum remove cloudlinux-fchange\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"configuration-details"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration-details","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration Details")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"low-level-access"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#low-level-access","aria-hidden":"true"}},[this._v("#")]),this._v(" Low-level access")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("p",[e._v("enable/disable the functionality. Write 1 to this file to enable, 0 to disable. If disabled, no events are coming to events file.")])]),e._v(" "),s("li",[s("p",[e._v("the modified files log itself. Events in the format are constantly appending to the end of the file if datacycle enabled. File events are never duplicated: if we have file modification event, we would not get file deletion event if the file has been later deleted. This events buffer has limited capacity, therefore from time to time, the events log requires flushing.")])]),e._v(" "),s("li",[s("p",[e._v("a file for clearing events log. For flushing, the last from the events file is written to this file. Right after this, events log is truncated to that .")])]),e._v(" "),s("li",[s("p",[e._v("forbidding users with UIDs equal or bigger that set in this file writing to their home directories. At the boot, the file has -1. When it’s written positive value, say 500, the system starts effectively preventing users from modifying their home dirs (on write attempt a user gets error). This feature is designed to prevent users from updating their home dirs when events are not handled.")])]),e._v(" "),s("li",[s("p",[e._v("just counter of log entries of events file.")])]),e._v(" "),s("li",[s("p",[e._v("this file has minimal UID of events to be handled. Events from users with smaller UID are not handled. By default 500 (non-system users in redhat-based systems).")])])])}],!1,null,null,null);a.options.__file="README.md";t.default=a.exports}}]);