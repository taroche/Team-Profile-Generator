const engineerCard = initialResponse => {
    return `
<div class="card col-md-3 col-5 mb-3 shadow p-3 bg-white rounded">
<div class="card-body">
    <div class="p-3 mb-2 bg-primary text-white">
        <h5 class="card-title">${initialResponse.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${initialResponse.role}</h6>
    </div>
    <p class="card-text">ID: ${initialResponse.id}</p>
    <p class="card-text">Email: <a href="mailto:${initialResponse.email}" class="card-link">${initialResponse.email}</a></p>
    <p class="card-text">Github: <a href="https://github.com/${initialResponse.gitAccount}" class="card-link">${initialResponse.gitAccount}</a></p>
</div>
</div>
`
}
module.exports = engineerCard;