module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.initConfig({
        watch: {
            files: ['*.html', '*.php'],
            options: {
                livereload: true
            }
        },
        uglify: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'js', // ตำแหน่งของไฟล์หลัก
                    src: ['*.js'], // ไฟล์หลักที่ต้องการให้แปลง
                    ext: '.min.js', // นามสกุลของไฟล์หลังจากแปลงแล้ว
                    dest: 'js/dest' // ตำแหน่งไฟล์ใหม่ที่จะเก็บไฟล์ที่แปลงแล้ว
                }]
            },
            options: {
                mangle: false
            }
        }
    });
};
