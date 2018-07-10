var arr = [];
n = m = 10;

max = 60;
min = 0;
for (i = 0; i < n; i++) {
    for (j = 0; j < m; j++) {
        arr[i][j] = Math.floor(Matn.random() * (max - min) - min);
    }
}