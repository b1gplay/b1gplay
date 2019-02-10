from subprocess import check_output, CalledProcessError, STDOUT
import subprocess


def getLength(filename):
    result = subprocess.Popen(["ffprobe", filename],
                              stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
    return [x for x in result.stdout.readlines() if "Duration" in x]


def getDuration(filename):

    command = [
        'ffprobe',
        '-v',
        'error',
        '-show_entries',
        'format=duration',
        '-of',
        'default=noprint_wrappers=1:nokey=1',
        filename
    ]

    try:
        output = check_output(command, stderr=STDOUT).decode()
    except CalledProcessError as e:
        output = e.output.decode()

    return output

    output = subprocess.check_output(
        [ffmpeg_path + 'ffprobe', '-i', 'F:\\tst.mp4'])
