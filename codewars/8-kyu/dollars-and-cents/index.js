const formatMoney = amount => `$${amount.toFixed(2)}`;

// test Case
formatMoney(39.99); // '$39.99'
formatMoney(3.0); // '$3.00'
formatMoney(3.1); // '$3.10'
formatMoney(314.16); // '$314.16'
formatMoney(117); // '$'$117.00'
