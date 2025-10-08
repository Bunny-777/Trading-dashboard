export default function Security() {
  return (
    <div className="text-sm text-neutral-900 dark:text-white space-y-2">
      <div><span className="font-semibold">2FA:</span> Enabled</div>
      <div><span className="font-semibold">Password Last Changed:</span> 30 days ago</div>
      <div><span className="font-semibold">Recent Logins:</span> New York, London</div>
    </div>
  );
}
