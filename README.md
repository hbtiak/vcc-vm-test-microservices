# VCC Assignment2: GCP Auto-scaling - with Security

By
Amit Kumar (M25AI2126) - MTech AI Executive

## Overview
- VM Type: e2-micro (2 vCPU, 1 GB memory)
- OS: Debian GNU/Linux 12 (bookworm)
- Auto-scaling: CPU > 60% triggers scale-out
- Min Instances: 1 | Max Instances: 3
- Zones: us-central1-b, us-central1-c, us-central1-f
- Firewall: SSH restricted to 49.36.191.194/32
- IAM: Custom role "VM Viewer Plus"

## Files in this Repository
1) create-vm.sh- to Creates VM instance and template 
2) create-autoscaling.sh - to Sets up MIG with auto-scaling 
3) create-firewall.sh- Configures firewall rules 
4) create-iam-role.sh -Creates custom IAM role 
5) test-stress.sh- Commands to test auto-scaling 
6) cleanup.sh- Deletes all resources 



# Run scripts in order
./01-create-vm.sh
./02-create-autoscaling.sh
./03-create-firewall.sh
./04-create-iam-role.sh
