class Player {
    constructor () {

    }
    getCount () {
        var playerCountRef = database.ref("playerCount");
        playerCountRef . on("value",function(data){
            playerCount = data.val();
        })


    }
    updateCount (Count) {
        database.ref ("/").update({
            playerCount:Count
        })
    }
    update(name){
        var PlayerIndex = "player"+playerCount;
        database.ref(PlayerIndex).set({
            name:name
        });
    }
}