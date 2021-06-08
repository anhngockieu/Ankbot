#!/usr/bin/env python

import paramiko
import spur

ssh = paramiko.client.SSHClient()
# Auto add host to known hosts
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
# Connect to server
ssh.connect("pifi.local", username="ubuntu", password="02051996")
# Do command
shell=ssh.invoke_shell()
shell.send("./bin/myscript.sh")
# print(ssh_stdout.read().decode())
# err = ssh_stderr.read().decode()
# # if err:
# #     print(err)
# # Get status code of command
# exit_status = ssh_stdout.channel.recv_exit_status()
# # Print status code
# print ("exit status: %s" % exit_status)
# # Print content
# for line in ssh_stdout.readlines():
#     print(line.rstrip())
# # Close ssh connect
# ssh.close()


# shell = spur.SshShell(hostname="pifi.local", username="ubuntu", password="02051996")
# # shell.run(["source","~/.bashrc"])
# # result = shell.run(["roslaunch","--wait","ankbot_bringup","ankbot_serial.launch"])
# result = shell.run(["./bin/myscript.sh"])

# print result.output # prints hello