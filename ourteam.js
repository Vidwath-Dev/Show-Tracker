var teamMembers = [
    { name:'Vidwath Dev',role:'Emp-id:123456',image:'person.jpg'},
    { name:'Shamanth Shetty',role:'Emp-id:145646',image:'person.jpg'},
    { name:'Tarun B K',role:'Emp-id:655656',image:'person.jpg'},
    { name:'Yogesh',role: 'Emp-id:946256', image: 'person.jpg'},
    // Add more team members as needed
];
var teamContainer = document.getElementById('team-container');
teamMembers.forEach(function(member) {
    var memberCard = document.createElement('div');
    memberCard.className = 'team-member';

    var memberImage = document.createElement('img');
    memberImage.src = member.image;
    memberCard.appendChild(memberImage);

    var memberName = document.createElement('h2');
    memberName.textContent = member.name;
    memberCard.appendChild(memberName);

    var memberRole = document.createElement('p');
    memberRole.textContent = member.role;
    memberCard.appendChild(memberRole);
    teamContainer.appendChild(memberCard);
});