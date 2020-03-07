https://www.tenforums.com/tutorials/144208-windows-subsystem-linux-add-desktop-experience-ubuntu.html?__cf_chl_jschl_tk__=eacb14ffe23ec8c5a2452b25e990ae759611ad5b-1583551035-0-ASAptMQBn6ZE2JtkWER2yJUm_mYlE7njjuelFFlzLSOahrk7NrJOeCTsG-aNLEFRGmiTI-3ntFH-VDRBs-dO7F-j6cYN94PkoyrJWA012vc15ifnMHjaSddDKip_kom498G4Nl_mGVSFVSXx5XdiZNoM2iEYp9lc5uanjCDwb0RRn3kZyImDBiFCOy400Vg48FCVvRPy1769VwLLM8zBCdyT7pAZ0jWw7oJDsXsVs2YUBZb0nHSfydb1cm8I6EiIkADe3_v6SAEka0K44R1bm6M5OjOmACnH8-V3swl_1T2b3YEytX0PTfTBtQTsFGqDzBQJTjWxuDrAVkM_kFWCYhXmKnodTnXsrCpd3yEA8yejxmjbXaQnbp32tyI1bIcI6g

https://autoize.com/xfce4-desktop-environment-and-x-server-for-ubuntu-on-wsl-2/

https://blog.csdn.net/kfeng632/article/details/102856346

wsl --set-default-version 2

One more thing: you should disable AntiVirus checking of the filesystem of the Linux instance (it’s not going to find the problems anyway and slows down writes). For mine, it’s Ubuntu so it lives in a subdirectory of my home directory AppData\Local\Packages\something CanonicalGroupLtd something Ubuntu something (see how specific I can be?). Just add an exclusion to that folder so it doesn’t check files it doesn’t understand.


https://github.com/microsoft/cascadia-code
