cmake_minimum_required(VERSION 3.0.2)
project(ankbot_bringup)

## Compile as C++11, supported in ROS Kinetic and newer
add_compile_options(-std=c++11)

## Find catkin macros and libraries
## if COMPONENTS list like find_package(catkin REQUIRED COMPONENTS xyz)
## is used, also find other catkin packages
find_package(catkin REQUIRED COMPONENTS
  ankbot_msgs
  diagnostic_msgs
  roscpp
  sensor_msgs
  std_msgs
)


################################################
## Declare ROS messages, services and actions ##
################################################
################################################
## Declare ROS dynamic reconfigure parameters ##
################################################
###################################
## catkin specific configuration ##
###################################
catkin_package(
#  INCLUDE_DIRS include
#  LIBRARIES ankbot_bringup
#  CATKIN_DEPENDS ankbot_msgs diangostic_msgs roscpp sensor_msgs std_msgs
#  DEPENDS system_lib
)

###########
## Build ##
###########

## Specify additional locations of header files
## Your package locations should be listed before other locations
include_directories(
# include
  ${catkin_INCLUDE_DIRS}
)

add_executable(robot_diagnostics src/robot_diagnostics.cpp)
add_dependencies(robot_diagnostics ${${PROJECT_NAME}_EXPORTED_TARGETS} ${catkin_EXPORTED_TARGETS})
target_link_libraries(robot_diagnostics ${catkin_LIBRARIES})

## Declare a C++ library
# add_library(${PROJECT_NAME}
#   src/${PROJECT_NAME}/ankbot_bringup.cpp
# )
#############
## Install ##
#############
#############
## Testing ##
#############

install(TARGETS robot_diagnostics
  RUNTIME DESTINATION ${CATKIN_PACKAGE_BIN_DESTINATION}
)

install(PROGRAMS 
  scripts/create_udev_rules
  DESTINATION ${CATKIN_PACKAGE_BIN_DESTINATION}
)

install(DIRECTORY launch
  DESTINATION ${CATKIN_PACKAGE_SHARE_DESTINATION}
)

install(FILES 99-robot-cdc.rules
  DESTINATION ${CATKIN_PACKAGE_SHARE_DESTINATION}
)
