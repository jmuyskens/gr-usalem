from fabric.api import *

env.user = 'churches'
env.hosts = ['abs.calvin.edu']

def deploy():
    code_dir = '/home/churches/www/'
    with cd(code_dir):
        run("git pull")
        
