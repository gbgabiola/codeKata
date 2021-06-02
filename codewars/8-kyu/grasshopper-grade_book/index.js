function getGrade(s1, s2, s3) {
  const score = (s1 + s2 + s3) / 3;
  // if (score >= 90) return 'A';
  // if (score >= 80) return 'B';
  // if (score >= 70) return 'C';
  // if (score >= 60) return 'D';
  // if (score >= 0) return 'F';

  return score >= 90
    ? 'A'
    : score >= 80
    ? 'B'
    : score >= 70
    ? 'C'
    : score >= 60
    ? 'D'
    : 'F';
}
