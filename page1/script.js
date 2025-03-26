<script>
    const choice = new URLSearchParams(window.location.search).get('choice');
    if (choice === '1') {
        document.write("<p>You chose the door on the left and found a secret passage！</p>");
        document.write("<a href='ending1.html' class='button'>继续</a>");
    } else {
        document.write("<p>You chose the door on the right, and the trap was triggered！</p>");
        document.write("<a href='ending2.html' class='button'>继续</a>");
    }
</script>