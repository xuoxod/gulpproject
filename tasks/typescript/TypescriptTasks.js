export const typescriptMin = (cb) => {
  src(`${TYPESCRIPT_SRC}*.ts`)
    .pipe(
      ts(
        {
          noImplicitAny: true,
          outFile: `${DEST_TYPESCRIPTS_FILENAME_MIN}`,
          target: `${ES6}`,
        },
        ts.reporter.defaultReporter()
      )
    )
    .pipe(uglify())
    .pipe(dest(TYPESCRIPT_DESTINATION));
  cb();
};

export const typescript = (cb) => {
  src(`${TYPESCRIPT_SRC}*.ts`)
    .pipe(
      ts(
        {
          noImplicitAny: true,
          outFile: `${DEST_TYPESCRIPTS_FILENAME}`,
          target: `${ES6}`,
        },
        ts.reporter.defaultReporter()
      )
    )
    .pipe(dest(TYPESCRIPT_DESTINATION));
  cb();
};

export const typescriptTasks = [typescript, typescriptMin];
