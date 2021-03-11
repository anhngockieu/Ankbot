Here is the part that supports web server communication with ROS, read the following steps:

    + Step 1 : roscore
    + Step 2 : run the launch file of the remote package
                'roslaunch remote_web remote_web.launch'
    
    + Step 3 : Create server in python2
                'roscd web_interface/gui && python -m SimpleHTTPServer 8000'
    
    + Step 4 : Access web address "https://localhost:8000" and enjoy :) 