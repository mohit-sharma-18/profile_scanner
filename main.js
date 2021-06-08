// 'https://randomuser.me/api/portraits/men/51.jpg'

const data = [

    {
        name: 'Rohit Kumar',
        age: '23',
        city: 'New Delhi',
        religion: 'Hindu-Panchal',
        income_source: 'Steel Manufacturer',
        education: 'B.com graduated',
        inter_caste: 'Yes',
        image: 'https://randomuser.me/api/portraits/men/47.jpg'
    },

    {
        name: 'Sachin Arora',
        age: '25',
        city: 'Mumbai',
        religion: 'Hindu-Punjabi',
        income_source: 'Restaurant',
        education: '12th paas',
        inter_caste: 'Yes',
        image: 'https://randomuser.me/api/portraits/men/61.jpg'
    },

    {
        name: 'Priya Sharma',
        age: '24',
        city: 'Karnal',
        religion: 'Christian',
        income_source: 'Freelancing',
        education: 'M.sc-Geography',
        inter_caste: 'No',
        image: 'https://randomuser.me/api/portraits/women/70.jpg'
    },

    {
        name: 'Sana khan',
        age: '26',
        city: 'Kolkata',
        religion: 'Muslim',
        income_source: 'Limited job',
        education: 'M.sc-Computer',
        inter_caste: 'Yes',
        image: 'https://randomuser.me/api/portraits/women/90.jpg'
    },

    {
        name: 'Parvinder Gill',
        age: '25',
        city: 'Punjab',
        religion: 'Punjabi-Gill',
        income_source: 'Canada',
        education: 'IELTS',
        inter_caste: 'No',
        image: 'https://randomuser.me/api/portraits/men/20.jpg'
    },

    {
        name: 'Ritu Chawla',
        age: '26',
        city: 'Assam',
        religion: 'Hindu',
        income_source: 'Tea exporter',
        education: 'Diploma',
        inter_caste: 'Yes',
        image: 'https://randomuser.me/api/portraits/women/66.jpg'
    },

    {
        name: 'Preet kaur',
        age: '27',
        city: 'Gujrat',
        religion: 'Sikh',
        income_source: 'Goverment employee',
        education: 'M.com',
        inter_caste: 'Yes',
        image: 'https://randomuser.me/api/portraits/women/11.jpg'
    },


    {
        name: 'Rohan Malhotra',
        age: '25',
        city: 'Bangalore',
        religion: 'Hindu-jain',
        income_source: 'Enterpreneur',
        education: 'MBA-honour',
        inter_caste: 'Yes',
        image: 'https://randomuser.me/api/portraits/men/86.jpg'
    }
]




function profileiterator(profiles) {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < profiles.length ?
                { value: profiles[nextIndex++], done: false } :
                { done: true }
        }
    };
};



const candidates = profileiterator(data);



myClick();   // call once without button clicked , to  show one candidate always



// Click button condition
let nextBtn = document.getElementById('nextBtn');
nextBtn.addEventListener('click', myClick);

function myClick() {
    const currentCandidate = candidates.next().value;

    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    // use if condition escape from error
    if (currentCandidate != undefined) {
        image.innerHTML = `<img src = '${currentCandidate.image}'>`;
        profile.innerHTML = `<ul class="list-group list-group-flush mx-5">
<li class="list-group-item">Name: ${currentCandidate.name}</li>
<li class="list-group-item">${currentCandidate.age} years old</li>
<li class="list-group-item">Lives in ${currentCandidate.city}</li>
<li class="list-group-item">Religion: ${currentCandidate.religion}</li>
<li class="list-group-item">Income Source: ${currentCandidate.income_source}</li>
<li class="list-group-item">Education Status: ${currentCandidate.education}</li>
<li class="list-group-item">Inter-Caste Marriage: ${currentCandidate.inter_caste}</li>
</ul>`;
    }
    else {
        alert('End of Partner Profiles');
        window.location.reload();  // to reload page for loop show  of candidates
    }


}
