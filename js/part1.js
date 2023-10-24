document.addEventListener('DOMContentLoaded', function () {
    const cells = document.querySelectorAll('td');
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    document.body.appendChild(tooltip);
    function setTooltipContent(content) {
      tooltip.innerHTML = content;
    }
    cells.forEach((cell) => {
      cell.addEventListener('mouseover', function (e) {
        const cellContent = cell.innerText;
        setTooltipContent('Tooltip Text: ' + cellContent);
  
        const cellRect = cell.getBoundingClientRect();
        const bodyRect = document.body.getBoundingClientRect();
  

        tooltip.style.left = cellRect.left + 'px';
        tooltip.style.top = cellRect.bottom - bodyRect.top + 'px';
  
        tooltip.style.display = 'block';
      });
  
      cell.addEventListener('mouseout', function () {

        tooltip.style.display = 'none';
      });
    });
  });