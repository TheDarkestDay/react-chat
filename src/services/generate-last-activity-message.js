const DurationInMs = {
  MINUTE: 1000 * 60,
  HOUR: 1000 * 60 * 60,
  DAY: 1000 * 60 * 60 * 24
};

export default function generateLastActivityMessage(lastUpdateDate) {
  const lastUpdateDateInMs = new Date(lastUpdateDate);
  const timeDiff = Date.now() - lastUpdateDateInMs;

  let result = `A few seconds ago`;

  if (timeDiff >= DurationInMs.MINUTE) {
    result = `${Math.floor(timeDiff / DurationInMs.MINUTE)} minutes ago`;
  }

  if (timeDiff >= DurationInMs.HOUR) {
    result = `${Math.floor(timeDiff / DurationInMs.HOUR)} hours ago`;
  }

  if (timeDiff >= DurationInMs.DAY) {
    result = `${Math.floor(timeDiff / DurationInMs.DAY)} days ago`;
  }

  return result;
}